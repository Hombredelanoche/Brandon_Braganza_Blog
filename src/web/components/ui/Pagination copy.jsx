import Link from "@/web/components/ui/Link"
import config from "@/web/config"
import clsx from "clsx"

const PaginationLink = (props) => {
  const { isActive, page, className, ...otherProps } = props

  return (
    <Link
      className={clsx(
        "p-3 basis-12 text-center hover:bg-slate-100",
        {
          "bg-slate-200 font-semibold": isActive,
        },
        className,
      )}
      href={{ query: { page } }}
      {...otherProps}
    />
  )
}
const Pagination = (props) => {
  const { count, page, className, ...otherProps } = props
  const countPages = Math.ceil(count / config.ui.itemsPerPage)

  return (
    <div
      className={clsx("flex gap-2 justify-center", className)}
      {...otherProps}
    >
      {page > 1 && (
        <>
          <PaginationLink page={page - 1}>PREVIOUS</PaginationLink>
          <PaginationLink page={page - 1}>{page - 1}</PaginationLink>
        </>
      )}
      <PaginationLink page={page} isActive>
        {page}
      </PaginationLink>
      {page < countPages && (
        <>
          <PaginationLink page={page + 1}>{page + 1}</PaginationLink>

          <PaginationLink page={page + 1}>NEXT</PaginationLink>
        </>
      )}
    </div>
  )
}

export default Pagination
