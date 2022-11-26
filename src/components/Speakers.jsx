import Reract from "react";

function Speakers() {
  const speakers = [
    {
      name: "Dr Anuj Mubayi",
      title: "Associate Professor, Arizona State university, USA",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Aruchnan Elayaraja",
      title: "Associate Professor, University of Malaya, Malaysia",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr N Kohilvani",
      title: "Associate Professor, University of Malaya, Malaysia",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr G Sreedhar Rao",
      title: "Professor, University of West Indies, West Indies",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr J V Ramana Reddy",
      title: "Assistant Professor, Tohoku University, Japan",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Manoranjan Mishra",
      title: "Professor, IIT-Ropar",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr PVSN Murthy",
      title: "Professor, IIT-Kharagpur",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr TVS Shekhar",
      title: "Professor, IIT-BHU",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr D Srinivasacharya",
      title: "Professor, NIT-Warangal",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Ch Aswini Kumar",
      title: "Professor, VIT, Vellore",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr J Annapurna",
      title: "Professor, VIT, Vellore",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr BSRV Prasad",
      title: "Associate Professor, VIT, Vellore",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Raja Das",
      title: "Associate Professor, VIT, Vellore",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr P K Kameswaran",
      title: "Associate Professor, VIT, Vellore",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Anant Kant Shukla",
      title: "Assistant Professor, VIT Bhopal",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
    {
      name: "Dr Pankaj Shukla",
      title: "Assistant Professor, VIT Chennai",
      caption:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
    },
  ];

  return (
    <div className="wrapper bg-primary flex flex-col justify-center py-24">
      <div className="w-3/4 mx-auto">
        <h4 className="text-secondary text-5xl mb-16 text-center">Speakers</h4>
        <div className=" flex justify-around flex-wrap items-center ">
          {speakers.map((item) => {
            return (
              <div className="bg-secondary text-primary px-6 py-8 flex w-[35rem] space-x-6 items-center mb-2 rounded-xl">
                <img
                  src="https://via.placeholder.com/150"
                  className="rounded-full w-32"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl">{item.name}</h4>
                  <h4 className="text-lg italic">{item.title}</h4>
                  <h4 className="text-md">{item.caption}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
