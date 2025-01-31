import React, { useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import { Spin, Modal } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../services/auth";
import { useNotificationTrigger } from "../../contexts/notificationTrigger";

interface ForgotPasswordPropType {}

export default function ResetPassword({}: ForgotPasswordPropType): React.JSX.Element {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { triggerError } = useNotificationTrigger();
  const [searchParams] = useSearchParams();
  let token = searchParams.get("token");
  console.log({ token });
  function closeModal() {
    setShowModal(false);
  }
  function sendResetPassword() {
    if (!newPassword) {
      setFeedbackText("Input a Password");
      return;
    }
    // begin-loading
    setSpinning(true);
    AuthService.resetPassword({ password: newPassword, token: token as string })
      .then((response) => {
        setSpinning(false);
        setShowModal(true);
        console.log({ response });
      })
      .catch((err) => {
        console.error({ err });
        triggerError({ title: "Error Occured", message: err.message });
        setSpinning(false);
      });
  }
  const goToLogin = () => navigate("/login");
  return (
    <main id="ForgotPassword">
      <Modal
        onCancel={closeModal}
        onOk={goToLogin}
        open={showModal}
        closable={true}
        okText={"Go To Login"}
      >
        <div className="py-3" />
        <p className="text-bold text-center">
          Password Reset Successful. Login Now
        </p>
        <div className="py-2" />
      </Modal>
      <div className="main-spacing-x w-100">
        <div className="py-4" />
        <div className="py-2" />
        <div id="signup-contents-main-container">
          <div className="container-fluid no-space">
            <div className="row no-space justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-7 no-space">
                <div className="signup-contents py-5 px-3">
                  <div className="text-center">
                    <h1 className="text-bold font-family-quicksand">
                      CREATE NEW PASSWORD
                    </h1>
                    <p className="text-medium">
                      Please input a new password for your account. Make sure it
                      is a strong password. Consider Using a combination of
                      Upper and Lowercase letters, Symbols and numbers.
                    </p>
                  </div>
                  <div className="py-3" />
                  <div>
                    <div>
                      <D_TextInput
                        valid={newPassword.length > 0}
                        feedbackText={feedbackText}
                        value={newPassword}
                        onChange={setNewPassword}
                        leftIcon={<FontAwesomeIcon icon={faLock} />}
                        placeholder="New Password"
                        dark={false}
                      />
                    </div>
                    <div className="py-2" />
                  </div>
                  <div>
                    <FButtonMain
                      style={{ width: "100%" }}
                      actionFn={sendResetPassword}
                    >
                      <span className="text-none text-semibold">
                        Reset Password
                      </span>
                    </FButtonMain>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spin
          fullscreen
          tip={"Changing Password... Please Wait."}
          spinning={spinning}
        ></Spin>
      </div>
    </main>
  );
}
