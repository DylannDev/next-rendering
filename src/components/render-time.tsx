import EnvComponent from './env-component'

export default function RenderTime({
  name,
  disabled = false,
}: {
  name?: string
  disabled?: boolean
}) {
  return (
    <div className="flex flex-auto items-center justify-center ">
      <p className="text-sm">
        <EnvComponent name={name} disabled={disabled} />
        Rendu le&nbsp;
        <span className="animate-color-cycle">{new Date().toISOString()}</span>
      </p>
    </div>
  )
}
