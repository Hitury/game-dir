// components/CustomModal.tsx
"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Button } from "@heroui/button";
import {NumberInput} from "@heroui/react";

interface CustomModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

export function CustomModal({ isOpen, onOpenChange, title }: CustomModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur"
      classNames={{
        backdrop: "bg-black/70 backdrop-blur-md",
      }}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-lg font-bold">{title}</ModalHeader>
            <ModalBody>
              <p className="text-gray-500">
                Enter your rating for this game.
              </p>
              <NumberInput maxValue={10} minValue={1} errorMessage="Please enter a valid rating (1-10)"/>   
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button className="bg-[#C59F60] text-black hover:bg-[#b88a5c]" onPress={onClose}>
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}