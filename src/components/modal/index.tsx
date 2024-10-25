import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

interface DModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DModal: React.FC<DModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          ref={dialogRef}
          className="custom-dialog"
          onClick={handleDialogClick}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            {children}
          </motion.div>
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default DModal;
