import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="St. Thomas" invert={invert}>
          1 Carlsberg Gate
          <br />
          St. Thomas, USVI 00801
        </Office>
      </li>
      <li>
        <Office name="St. Croix" invert={invert}>
          PO Box 64546
          <br />
          St. Croix, USVI 00805
        </Office>
      </li>
    </ul>
  )
}
