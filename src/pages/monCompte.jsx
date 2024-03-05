import React, { useState, useEffect } from "react"
import apiClient from "@/web/services/apiClient"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"

export const getServerSideProps = async () => {
  const data = await apiClient("/users")

  return {
    props: { initialData: data },
  }
}

const MonCompte = ({ initialData }) => {
  const { query } = useRouter()
  const {
    isFetching,
    data: { result: users },
    refetch,
  } = useQuery({
    queryKey: ["users"],
  })
}

export default MonCompte
