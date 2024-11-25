import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Dispatch, SetStateAction } from 'react';

export default function CalendarModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="bg-[#323232] text-[#FFFFFF]">
        <DialogHeader>
          <DialogTitle>Schedule a Call</DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <div className="bg-[#666666]/40 p-8 rounded-xl text-center">
            <p className="mb-4">Calendar integration placeholder</p>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-gradient-to-r from-[#FE7443] to-[#FE8F68] text-[#FFFFFF] hover:from-[#FE8F68] hover:to-[#FE7443] rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
