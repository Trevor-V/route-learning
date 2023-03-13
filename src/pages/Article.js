import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/articles/${id}`);
  const navigate = useNavigate();
  //example of what it looks like for this page       const params = {id: 1}

  useEffect(() => {
    if (error) {
      //redirect
      //history.goBack()
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <div>...Loading</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>by {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
