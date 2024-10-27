"use client";

const Input = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const title = e.target.title.value;
    console.log(name, title);
   e.target.reset();

    try {
      const response = await fetch("/api/book/new", {
        method: "POST",
        body: JSON.stringify({ name, title }),
      });
      if (response === ok) {
        alert("done property");
         
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Post now Data</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder=" Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Position</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="position"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
