
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center lg:w-1/4 mx-auto py-16">
            <p className="text-yellow-800 mb-5">---{subHeading}---</p>
          <h3 className="text-3xl uppercase border-y-4 border-indigo-500 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;