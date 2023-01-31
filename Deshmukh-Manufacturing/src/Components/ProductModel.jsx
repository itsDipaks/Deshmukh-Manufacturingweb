import React, {useState} from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 w-full flex-auto">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit, eveniet reiciendis aliquam similique sunt in
                    quidem a odio dolor, laborum ex doloremque! Reiciendis,
                    tenetur veritatis excepturi doloribus officia assumenda
                    dignissimos. Commodi recusandae repudiandae sint itaque
                    ipsum quaerat officia aspernatur beatae omnis facere porro,
                    similique pariatur cupiditate nam, nostrum eius quae
                    reprehenderit odio, quasi vero fugiat doloribus dolores
                    quibusdam. Fuga, cupiditate. A aut nihil fuga, quos,
                    dignissimos quasi voluptatum et natus alias, corrupti iure?
                    Velit amet placeat necessitatibus quibusdam fugiat omnis
                    vitae distinctio officia aspernatur autem dignissimos error,
                    qui, culpa adipisci. Officiis reiciendis nulla ducimus
                    soluta minima architecto voluptas nam est, dolores quia
                    numquam, quibusdam aut neque, quidem accusantium ipsa! Vitae
                    quo labore eaque repellat maxime voluptas? Placeat vitae
                    repudiandae eveniet! Mollitia inventore cupiditate corporis!
                    Ullam cumque soluta provident sequi exercitationem dolor
                    accusantium voluptatem adipisci error deserunt, consectetur
                    perferendis tenetur repellat possimus quo excepturi aut ad
                    expedita accusamus dignissimos fugit numquam.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
