import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

const TransferList = () => {
  const [leftItems, setLeftItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' }
  ]);
  const [rightItems, setRightItems] = useState([
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' }
  ]);
  const [selectedLeft, setSelectedLeft] = useState<string[]>([]);
  const [selectedRight, setSelectedRight] = useState<string[]>([]);
  const [searchLeft, setSearchLeft] = useState('');
  const [searchRight, setSearchRight] = useState('');

  const moveToRight = () => {
    const itemsToMove = leftItems.filter(item => selectedLeft.includes(item.id));
    setRightItems([...rightItems, ...itemsToMove]);
    setLeftItems(leftItems.filter(item => !selectedLeft.includes(item.id)));
    setSelectedLeft([]);
  };

  const moveToLeft = () => {
    const itemsToMove = rightItems.filter(item => selectedRight.includes(item.id));
    setLeftItems([...leftItems, ...itemsToMove]);
    setRightItems(rightItems.filter(item => !selectedRight.includes(item.id)));
    setSelectedRight([]);
  };

  const filteredLeftItems = leftItems.filter(item =>
    item.name.toLowerCase().includes(searchLeft.toLowerCase())
  );

  const filteredRightItems = rightItems.filter(item =>
    item.name.toLowerCase().includes(searchRight.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Basic Transfer List */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Basic Transfer List</h3>
        <div className="flex items-start gap-4">
          {/* Left List */}
          <div className="flex-1">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchLeft}
                onChange={(e) => setSearchLeft(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Search..."
              />
            </div>
            <div className="border rounded-lg dark:border-gray-700 overflow-hidden">
              <div className="p-2 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLeft.length === filteredLeftItems.length && filteredLeftItems.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedLeft(filteredLeftItems.map(item => item.id));
                      } else {
                        setSelectedLeft([]);
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {selectedLeft.length} of {filteredLeftItems.length} selected
                  </span>
                </label>
              </div>
              <div className="divide-y dark:divide-gray-700">
                {filteredLeftItems.map(item => (
                  <label key={item.id} className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedLeft.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLeft([...selectedLeft, item.id]);
                        } else {
                          setSelectedLeft(selectedLeft.filter(id => id !== item.id));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-2 pt-12">
            <button
              onClick={moveToRight}
              disabled={selectedLeft.length === 0}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={moveToLeft}
              disabled={selectedRight.length === 0}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Right List */}
          <div className="flex-1">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchRight}
                onChange={(e) => setSearchRight(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Search..."
              />
            </div>
            <div className="border rounded-lg dark:border-gray-700 overflow-hidden">
              <div className="p-2 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedRight.length === filteredRightItems.length && filteredRightItems.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRight(filteredRightItems.map(item => item.id));
                      } else {
                        setSelectedRight([]);
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {selectedRight.length} of {filteredRightItems.length} selected
                  </span>
                </label>
              </div>
              <div className="divide-y dark:divide-gray-700">
                {filteredRightItems.map(item => (
                  <label key={item.id} className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedRight.includes(item.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRight([...selectedRight, item.id]);
                        } else {
                          setSelectedRight(selectedRight.filter(id => id !== item.id));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferList;