import { redirect } from "next/navigation";

const AboutId = ({params}) => {
  if(params.id == 4) {
    redirect('/login');
  }
  return (
    <div>ID: {params.id}</div>
  )
}

export default AboutId;
