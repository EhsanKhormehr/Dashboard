import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { Button } from '../ui/button'

type ConfirmDialogButtonVaraint = "default" | "destructive" | "ghost" | "link" | "outline" | "secondary"

type ConfirmDialogProps = {
    trigger : React.ReactNode,
    title? : string
    description? : string
    confirmText? : string
    cancelText? : string
    cancelVariant? : ConfirmDialogButtonVaraint
    confirmVariant? : ConfirmDialogButtonVaraint
    onConfirm : ()=> void
}

export default function ConfirmDialog({trigger , title , description , confirmText , cancelText,cancelVariant , confirmVariant , onConfirm}:ConfirmDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-surface">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-surface">
          <AlertDialogCancel variant={cancelVariant}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction variant={confirmVariant} onClick={onConfirm}>{confirmText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
