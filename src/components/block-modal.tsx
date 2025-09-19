// components/ConfirmBlockModal.tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { FC } from "react";

interface ConfirmBlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmBlockModal: FC<ConfirmBlockModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/70 backdrop-blur-md",
      }}
    >
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="text-xl font-bold text-[#E78978]">
              Confirm Block
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to block this user? They will no longer be
                able to interact with you.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="light" onPress={close}>
                Cancel
              </Button>
              <Button
                color="danger"
                onPress={() => {
                  onConfirm();
                  close(); // ensure modal closes after confirm
                }}
              >
                Yes, Block
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmBlockModal;
