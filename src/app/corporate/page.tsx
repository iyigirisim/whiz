export default function Page() {
  return (
    <div className="h-full px-8 lg:px-16 py-4 flex justify-center items-center">
      <div className="h-2/3 w-1/2 bg-secondary rounded-2xl p-4 border-b-4 border border-black">
        Corporate Form
        <form className="flex flex-col">
          <label className="text-primary">Name</label>
          <input className="rounded-lg border border-primary" type="text" />
          <label className="text-primary">Email</label>
          <input className="rounded-lg border border-primary" type="text" />
          <label className="text-primary">Phone</label>
          <input className="rounded-lg border border-primary" type="text" />
          <label className="text-primary">Message</label>
          <textarea className="rounded-lg border border-primary mb-4" />
          <button className="bg-primary hover:bg-tertiary text-secondary rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
