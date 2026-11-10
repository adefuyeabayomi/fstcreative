"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import InputPlain from "../../components/input/input";
import { TextAreaPlain } from "../../components/input/input";
import { animateScroll as scroll } from "react-scroll";
import { useHash } from "@/hooks/useHash";
import FButtonMain from "../../components/Button/Main";
import { Checkbox } from "../../components/ui/Checkbox";
import { useDash } from "../../contexts/DashContext";

const QuotationRequest = (): React.JSX.Element => {
  let [description, setDescription] = useState("");
  let [duration, setDuration] = useState("");
  const [animationsList, setAnimationsList] = useState<string[]>([]);
  const [productDevList, setProductDevList] = useState<string[]>([]);
  const [contentCreationList, setContentCreationList] = useState<string[]>([]);

  let hash = useHash();

  // Determine which list to update based on the hash.
  function handleToggle(value: string, checked: boolean) {
    let updater: React.Dispatch<React.SetStateAction<string[]>> | null = null;

    switch (hash) {
      case "#product-development":
        updater = setProductDevList;
        break;
      case "#content-creation":
        updater = setContentCreationList;
        break;
      case "#animations":
        updater = setAnimationsList;
        break;
      default:
        updater = null;
    }

    if (updater) {
      updater((prevList) =>
        checked
          ? [...prevList, value]
          : prevList.filter((item) => item !== value),
      );
    }
  }

  let locationString = "";
  console.log({ locationHash: hash });
  switch (hash) {
    case "#product-development": {
      locationString = "Digital product design and development.";
      break;
    }
    case "#content-creation": {
      locationString = "Digital Content Creation and Social Media Management.";
      break;
    }
    case "#animations": {
      locationString = "Animation and Story Illustration.";
      break;
    }
    case "#coding-school": {
      locationString = "Design Classes.";
      break;
    }
  }

  let { updateDashStatus } = useDash();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <section id="quotation-request">
      <div className="py-4" />
      <div className="main-spacing-x">
        <div className="qr-page-head p-3 text-center r-15">
          <h3 className="font-family-quicksand text-semibold">
            Quotation Form
          </h3>
          <p className="text-semibold text-main">{locationString}</p>
          <p className="text-medium">
            Please fill the form below. This would provide details of your need
            for an accurate quotation.
          </p>
        </div>
        <div className="py-3" />
        <form>
          <div className="input-outline-group r-15 p-3">
            {hash == "#product-development" && (
              <div className="">
                <label className="text-p text-medium">
                  Pick the services you need from this group below.
                </label>
                <p>
                  <Checkbox value={"Web Development"} onCheckedChange={handleToggle}>
                    Web Development
                  </Checkbox>
                </p>
                <p>
                  <Checkbox
                    value={"Mobile App Development"}
                    onCheckedChange={handleToggle}
                  >
                    Mobile App Development
                  </Checkbox>
                </p>
                <p>
                  <Checkbox value={"UI/UX Design"} onCheckedChange={handleToggle}>
                    UI/UX Design
                  </Checkbox>
                </p>
                <p>
                  <Checkbox value={"Product Management"} onCheckedChange={handleToggle}>
                    Product Management
                  </Checkbox>
                </p>
              </div>
            )}
            {hash == "#content-creation" && (
              <div className="">
                <label className="text-p text-medium">
                  Pick the services you need from this group below.
                </label>
                <p>
                  <Checkbox value={"Copywriting"} onCheckedChange={handleToggle}>
                    Copywriting
                  </Checkbox>
                </p>
                <p>
                  <Checkbox
                    value={"Social Media Management"}
                    onCheckedChange={handleToggle}
                  >
                    Social Media Management
                  </Checkbox>
                </p>
                <p>
                  <Checkbox value={"Blog Management"} onCheckedChange={handleToggle}>
                    Blog Management
                  </Checkbox>
                </p>
              </div>
            )}
            {hash == "#animations" && (
              <div className="">
                <label className="text-p text-medium">
                  Pick the services you need from this group below.
                </label>
                <p>
                  <Checkbox value={"2d Animations"} onCheckedChange={handleToggle}>
                    2d Animations
                  </Checkbox>
                </p>
                <p>
                  <Checkbox value={"Story Illustrations"} onCheckedChange={handleToggle}>
                    Story Illustrations
                  </Checkbox>
                </p>
                <p>
                  <Checkbox
                    value={"Product Ads Video & Animations"}
                    onCheckedChange={handleToggle}
                  >
                    Product Ads Video & Animations
                  </Checkbox>
                </p>
              </div>
            )}
            <div className="py-2" />
            <label className="text-p text-medium">
              Describe Some specifics you would need the product for.
            </label>
            <div className="py-1" />
            <TextAreaPlain
              value={description}
              onChange={(e) => {
                setDescription(e);
              }}
            />
            <div className="py-2" />

            <label className="text-p text-medium">
              How soon would you need it.
            </label>
            <div className="py-1" />
            <InputPlain
              value={duration}
              onChange={(e) => {
                setDuration(e);
              }}
            />
          </div>
          <div className="py-3" />
          <div className="input-outline-group r-15 p-3">
            <label className="text-p text-medium">Name</label>
            <div className="py-1" />
            <InputPlain
              value={duration}
              onChange={(e) => {
                setDuration(e);
              }}
            />
            <div className="py-2" />
            <label className="text-p text-medium">
              Phone / WhatsApp Number
            </label>
            <div className="py-1" />
            <InputPlain
              value={duration}
              onChange={(e) => {
                setDuration(e);
              }}
            />
            <div className="py-2" />
            <label className="text-p text-medium">Email</label>
            <div className="py-1" />
            <InputPlain
              value={duration}
              onChange={(e) => {
                setDuration(e);
              }}
            />
            <div className="py-2" />
          </div>
          <div className="py-3" />
          <div className="input-outline-group r-15 p-3">
            <FButtonMain style={{ width: "100%" }}>
              Request For Quotation
            </FButtonMain>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuotationRequest;
