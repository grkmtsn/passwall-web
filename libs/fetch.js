import fetch from "isomorphic-unfetch"
import Router from "next/router"

const URL = process.env.BASE_URL

export default async function (path, options) {
  const res = await fetch(`${URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("TOKEN")
    },
    ...options
  })
  if (res.status == 401) Router.push("/login")
  return res.json()
}
