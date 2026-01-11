'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LeadForm from './lead-form';

export function Leads({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>
      {/* Button to manually control dialog */}
      <Button variant='outline' onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='sm:max-w-[525px]'>
          <DialogHeader>
            <DialogTitle className='text-xl'>Enroll in Our Course</DialogTitle>
          </DialogHeader>

          <LeadForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
