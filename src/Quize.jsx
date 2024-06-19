import { useState } from 'react'
import quize from './variables/quize';
import axios from 'axios'
const Quize = () => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [answers, setAnswers] = useState({ age: '', gender: '', rateHealth: '', exercise: "", healthFitnessGoals: "", activities: "", eatingHabits: "", allergies: "", medicationsRegularly: "" });
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const handleAnswerQuize = (option, id) => {
        setQuestionNumber((prev) => { if (prev == (quize.length - 1)) { return questionNumber } else { return questionNumber + 1 } })
        if (id == 1) setAnswers({ ...answers, age: option.split(") ")[1] });
        else if (id == 2) setAnswers({ ...answers, gender: option.split(") ")[1] });
        else if (id == 4) setAnswers({ ...answers, rateHealth: option.split(") ")[1] });
        else if (id == 5) setAnswers({ ...answers, exercise: option.split(") ")[1] });
        else if (id == 6) setAnswers({ ...answers, healthFitnessGoals: option.split(") ")[1] });
        else if (id == 7) setAnswers({ ...answers, activities: option.split(") ")[1] });
        else if (id == 8) setAnswers({ ...answers, eatingHabits: option.split(") ")[1] });
        else if (id == 9) setAnswers({ ...answers, allergies: option.split(") ")[1] });
        else if (id == 10) setAnswers({ ...answers, medicationsRegularly: option.split(") ")[1] });
    }

    const createUserHealth = async (e) => {
        try {
            e.preventDefault()
            const newAnswers = { ...answers, height, weight }
            const { data } = await axios.post("/api/health", newAnswers)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='pcontainer'>
            <div className='w-full flex flex-col items-center pt-20'>
                {quize[questionNumber].map((item) =>
                    <div className='w-full lg:w-[50%] ' key={item.id}>
                        <div>
                            <h2>Question {questionNumber + 1}:</h2>
                            <div className='flex items-center py-3'>
                                <h1 className=' font-semibold text-lg'>{item.q}</h1>
                            </div>
                            <div className='py-5 space-y-4 h-[50vh] overflow-y-auto scrollbar-hide bg-gray-100 px-3'>
                                {
                                    item.options.map((option) => <div key={option}>{
                                        option == "height" ?
                                            <div className='space-y-4'>
                                                <input type="text"
                                                    value={answers.height}
                                                    onChange={(e) => {
                                                        setHeight(e.target.value)
                                                    }}
                                                    placeholder='Enter your height'
                                                    className='border border-black-black w-full py-2 pl-3 flex justify-start text-sm lg:text-base'
                                                />
                                                <input type="text"
                                                    value={answers.weight}
                                                    onChange={(e) => {
                                                        setWeight(e.target.value)
                                                    }}
                                                    placeholder='Enter your weight'
                                                    className='border border-black-black w-full py-2 pl-3 flex justify-start text-sm lg:text-base'
                                                />
                                                <div className='flex justify-center'>
                                                    <button onClick={() => { setQuestionNumber(questionNumber + 1) }} className='bg-black-black text-white-White px-2 py-1'>Next</button>
                                                </div>
                                            </div> :
                                            <button
                                                className={`border border-black-black w-full py-2 pl-3 flex justify-start text-sm lg:text-base hover:bg-black-black/5 duration-300
                                                ${(Object.values(answers)[questionNumber > 2 ? questionNumber - 1 : questionNumber] == option.split(") ")[1]) ? 'bg-black-black/50 text-white-White/50' : "bg-white-White"}`}
                                                onClick={() => {
                                                    handleAnswerQuize(option, item.id)
                                                }}
                                            >
                                                {option}
                                            </button>}
                                    </div>)}
                            </div>
                        </div>
                    </div>)}
                <div className='w-full lg:w-[50%] flex justify-end'>
                    <div className=' pt-5 space-x-3'>
                        {!questionNumber == 0 && <button className='font-semibold' onClick={() => {
                            setQuestionNumber((prev) => {
                                if (prev === 0) {
                                    return prev;
                                } else { return prev - 1 }
                            })
                        }}>Back</button>}
                        {<button onClick={createUserHealth} disabled={questionNumber + 1 == quize.length ? false : true} className={`text-white-White py-1 px-3 select-none ${questionNumber + 1 == quize.length ? "bg-black-black" : "bg-black-black/50 cursor-not-allowed"}`}>submit</button>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Quize