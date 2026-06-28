import { userData } from "../lib/utils";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {userData.skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <span className="text-base font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
