import React, { useState, useEffect } from "react";

const PermissionsCard = ({ title, items }) => {
  const [selectedItems, setSelectedItems] = useState(() => {
    const storedItems = localStorage.getItem("selectedItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  console.log(selectedItems);

  const handleChecked = (item) => {
    const isSelected = selectedItems.includes(item);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  return (
    <div className="w-[404px] rounded-md bg-white m-6 p-2 items-center">
      <div className="p-2 border-b-2 border-gray text-center text-xl">{title}</div>
      <div>
        {items.map((item) => {
          return (
            <div className="flex flex-col m-2" key={item}>
              <div className="flex items-center text-lg">
                <input
                  type="checkbox"
                  className="m-2"
                  onChange={() => handleChecked(item)}
                  checked={selectedItems.includes(item)}
                />
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PermissionsCard;


/* add_users */

// position: relative;
// width: 1280px;
// height: 1420px;

// background: #DDE7FF;
