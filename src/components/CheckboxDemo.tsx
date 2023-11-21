"use client";

export function CheckboxDemo({ type, setState }: any) {
  // const { setSelectedCheckboxes }: string | any = useContext(appContext);

  const handleChange = (event: any) => {
    if (event.target.checked) {
      setState((prev: any) => [...prev, type]);
      // setSelectedCheckboxes((prev: any) => [...prev, type]);
    } else {
      setState((prev: any) =>
        prev.filter((checkbox: any) => checkbox !== type)
      );
      // setSelectedCheckboxes((prev: any) =>
      // prev.filter((checkbox: any) => checkbox !== type)
      // );
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={type}
        value={type}
        onChange={handleChange}
        className="w-4 h-4 accent-black"
      />
      {/* <Checkbox id={type} value={type} onChange={handleChange} /> */}

      <label
        htmlFor={type}
        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {type}
      </label>
    </div>
  );
}
