import React from "react";

export default function StackCard({ tech, onAdd, isAdded }) {
    return (

        <div
            className={`bg-white transition-all duration-200 rounded-2xl p-6 flex flex-col justify-between ${isAdded
                ? "border-2 border-[#c6055c] ring-4 ring-[#c6055c]/20 shadow-md"
                : "border border-slate-100 shadow-sm hover:shadow-md hover:border-[#c6055c]/50 hover:ring-2 hover:ring-[#c6055c]/10"
                }`}
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    </div>
                    {tech.badge && (
                        <span className="bg-[#ffeff3] text-[#bd3b5b] font-medium text-xs rounded-full px-3 py-1">
                            {tech.badge}
                        </span>
                    )}
                </div>


                <h3 className="text-xl font-bold text-slate-800 mb-2">{tech.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {tech.description}
                </p>
            </div>

            <div>

                <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
                    <div className="flex items-center gap-2">
                        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                            {tech.category}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                            {tech.difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-slate-700">
                        <span className="text-amber-400">★</span>
                        <span>{tech.rating}</span>
                    </div>
                </div>


                <button
                    onClick={() => onAdd(tech)}
                    disabled={isAdded}
                    className={`w-full py-3 text-sm font-semibold rounded-xl transition-all ${isAdded
                        ? "bg-slate-100 text-slate-400"
                        : "bg-slate-950 hover:bg-slate-800 text-white cursor-pointer"
                        }`}
                >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>

    );
}