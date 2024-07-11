import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from './ui/button'
import { useState } from 'react'
import { PHQ9 } from '@/db/questions'
import { AlertDialogBox } from './AlertDialogBox'
import { useAppDispatch, useAppStore } from '../lib/hooks'
import { incrementByAmount } from '@/lib/features/counter/counterSlice'

const Quiz = () => {
  const [count, setCount] = useState(0)

  // const store = useAppStore()
  const dispatch = useAppDispatch()
  const incrementBy = (amount: number) => {
    dispatch(incrementByAmount(amount))
  }

  const handleNext = () => {
    setCount(count + 1)
    incrementBy(10)
  }

  const handlePrev = () => {
    setCount(count - 1)
  }

  const handleSubmit = () => {
    if (count < 8) setCount(count + 1)
  }
  // const initialized = useRef(false)
  // if (!initialized.current) {
  //   store.dispatch(initializeProduct(product))
  //   initialized.current = true
  // }
  // const name = useAppSelector((state) => state.product.name)
  // const dispatch = useAppDispatch()

  return (
    <div className="p-2 flex flex-col gap-6">
      <h1 className="font-extrabold text-xl">{PHQ9[count].question}</h1>
      <div>
        <RadioGroup defaultValue="0" className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="r1" />
            <Label htmlFor="r1">Not at all</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r2" />
            <Label htmlFor="r2">Several days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r3" />
            <Label htmlFor="r3">More than half the days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r4" />
            <Label htmlFor="r4">Nearly every day</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex justify-around mt-2">
        <Button
          onClick={count > 0 ? handlePrev : () => {}}
          disabled={count <= 0}
        >
          Prev
        </Button>
        {count === 8 ? (
          <AlertDialogBox />
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
        <Button
          onClick={count < 8 ? handleNext : () => {}}
          disabled={count >= 8}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Quiz
