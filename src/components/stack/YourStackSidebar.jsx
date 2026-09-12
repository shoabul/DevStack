import React from "react";

export default function YourStackSidebar({ selectedStack, onRemove, onRemoveAll }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between h-fit sticky top-6">
            <div>

                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-800">Your Stack</h2>
                    <p className="text-xs text-slate-400 font-medium">
                        {selectedStack.length} {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
                    </p>
                </div>

                {selectedStack.length === 0 ? (
                    <div className="py-8 text-center text-slate-400 text-sm">
                        No technologies added yet.
                    </div>
                ) : (
                    <div className="space-y-3 mb-6">
                        {selectedStack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-3 border border-slate-200/60 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 leading-tight">
                                            {item.title}
                                        </h4>
                                        <span className="text-[10px] text-slate-400 block font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-200/50 transition-all"
                                    aria-label="Remove item"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedStack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="btn btn-outline btn-error w-full rounded-xl border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-semibold"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}