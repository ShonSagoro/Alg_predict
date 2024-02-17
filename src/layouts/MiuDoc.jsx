import CodeCard from "../components/CodeCard";

function MiuDoc() {
  const ExamplesCodes = [
    {
      title: "Grammar example",
      content: [
        {
          subtitle: "Arr example",
          code: `let arr[1,2,3,4];`,
        }
      ],
    }
  ];

  return (
    <>
      <div className="border border-transparent border-r-white overflow-y-auto bg-slate-700 text-white w-1/2 h-full flex flex-col items-center content-center p-10 ">
        {/* <img src={logo} className="h-1/5 w-auto mb-10"></img> */}
        <h1 className="text-4xl mb-20">Grammar Example</h1>
       <p>
        un ejemplo de gramatica usando la tabla predictiva
       </p>
        <br />

        <div className="w-full pl-8">
          {ExamplesCodes.map((example, index) => {
            return (
              <CodeCard
                key={index}
                title={example.title}
                content={example.content}
              />
            );
          })}
        </div>
    
      </div>
    </>
  );
}

export default MiuDoc;
