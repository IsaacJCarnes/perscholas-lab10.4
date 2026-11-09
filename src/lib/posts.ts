export const posts = [
  {
    id: 0,
    slug: "use-local-storage",
    title: "useLocalStorage",
    content:
      '\\codeblock\\import { useEffect, useState } from "react";\n\nexport default function useLocalStorage(storageName = "storedData") {\n  const [storage, setStorage] = useState({});\n  useEffect(() => {\n    try {\n      const localStorage = window.localStorage.getItem(storageName);\n      const localJson = localStorage ? JSON.parse(localStorage) : {};\n      localJson && setStorage(localJson);\n    } catch (e) {\n      console.error(`Could not retrieve localStorage${e.message ? `${e.message}` : ""}`);\n    }\n  }, [storageName]);\n\n  function setStorageItem(name, value){\n    setStorage((previousStorage) => {\n      const newStorage = {\n        ...previousStorage,\n        [name]: value,\n      };\n\n      window.localStorage.setItem(storageName, JSON.stringify(newStorage));\n\n      return newStorage;\n    });\n  }\n  return {storageData: storage, setStorageItem}\n}',
  },
  {
    id: 1,
    slug: "use-debounce",
    title: "useDebounce",
    content:
      '\\codeblock\\import { useEffect, useState } from \"react\";\n\nexport default function useDebounce(value, delay = 500) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    setLoading(true);\n    const timeout = setTimeout(() => {\n      setDebouncedValue(value);\n      setLoading(false);\n    }, delay);\n\n    return () => {\n      setLoading(false);\n      clearTimeout(timeout);\n    };\n  }, [value, delay]);\n  return { debouncedValue, loading };\n}',
  },
  {
    id: 2,
    slug: "use-pagination",
    title: "usePagination",
    content:
      '\\codeblock\\import { useEffect, useState } from \"react\";\n\nexport default function usePagination(totalItems, itemsPerPage, initialPage) {\n  const totalPages = Math.ceil(totalItems / itemsPerPage);\n  const [currentPage, setCurrentPage] = useState(\n    Math.min(initialPage, totalPages),\n  );\n  const startIndex = currentPage * itemsPerPage;\n  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);\n  const itemsOnCurrentPage = endIndex - startIndex;\n  const canNextPage = currentPage < totalPages - 1;\n  const canPrevPage = currentPage > 0;\n\n  useEffect(() => {\n    setCurrentPage(Math.min(initialPage, totalPages));\n  }, [itemsPerPage, initialPage]);\n\n  function setPage(page) {\n    if (-1 < page && page < totalPages) {\n      setCurrentPage(page);\n    } else {\n      console.error(\n        \"Attempting to set page to \",\n        page,\n        \" which is outside the bounds.\",\n      );\n    }\n  }\n\n  function nextPage() {\n    setCurrentPage((prevVal) => prevVal + 1);\n  }\n\n  function prevPage() {\n    setCurrentPage((prevVal) => prevVal - 1);\n  }\n  return {\n    currentPage,\n    totalPages,\n    startIndex,\n    endIndex,\n    itemsOnCurrentPage,\n    setPage,\n    nextPage,\n    prevPage,\n    canNextPage,\n    canPrevPage,\n  };\n}',
  },
];
