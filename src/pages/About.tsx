export function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 text-left sm:px-6">
      <h1 className="font-heading text-4xl text-leaf-700">About FreshCart</h1>
      <p className="mt-4 text-lg text-ink-500">
        FreshCart is a playful front-end demo: a farmers-market spirit with the
        clarity of a modern grocery app. No accounts, no servers — just a cart
        that remembers what you picked for this browser session.
      </p>
      <div className="mt-10 space-y-6 text-ink-500">
        <p>
          We believe good food should feel approachable: warm whites like linen
          on a stall table, leafy greens for trust and growth, and a glint of
          golden yellow for the moment something ripe catches the light.
        </p>
        <p>
          This project showcases product browsing, category filters, and a cart
          drawer with quantity controls. Checkout is a static button — your
          imagination handles the rest.
        </p>
      </div>
    </div>
  )
}
