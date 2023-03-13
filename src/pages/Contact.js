import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get('name')

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        voluptate distinctio adipisci ipsam, consectetur tenetur nihil, in
        molestiae voluptates excepturi ducimus dolorum impedit! Quaerat hic
        pariatur velit laudantium eligendi deleniti.
      </p>
    </div>
  )
}
