import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { incrementByAmount } from '@/lib/features/counter/counterSlice'
import { useAppDispatch } from '@/lib/hooks'

export function AlertDialogBox() {
  const dispatch = useAppDispatch()
  const incrementBy = (amount: number) => {
    dispatch(incrementByAmount(amount))
  }

  const handleSubmit = () => {
    incrementBy(10)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action we mark all the responses you gave as final and send it
            to the database
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
