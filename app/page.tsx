import NewTodoForm from '@/components/NewTodoForm'

// const getData = async () => {
//   await new Promise((res) => setTimeout(() => res(0), 2000))
//   return { data: [1, 2, 3] }
// }

export default async function Home() {
  // const data = await getData()
  // console.log('🚀 ~ data:', data)

  return (
    <div>
      Home
      <NewTodoForm />
    </div>
  )
}
