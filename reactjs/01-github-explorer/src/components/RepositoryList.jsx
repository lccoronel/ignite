import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="respository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository} repository={repository} />
        ))}
      </ul>
    </section>
  )
}