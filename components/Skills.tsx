import {userData} from '../lib/utils'

export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 ">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userData.skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white border border-gray-200 rounded-xl p-2 flex flex-col items-center shadow-sm"
          >
            {/* Stars */}
            <div className="flex mb-1">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  filled={i < Math.floor(skill.rating)}
                  half={skill.rating % 1 > 0 && i === Math.floor(skill.rating)}
                />
              ))}
            </div>

            {/* Icon + Name */}
            <div className="flex items-center gap-3">
              {skill.icon}
              <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Star({ filled, half }: { filled: boolean; half: boolean }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      {half ? (
        <>
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </>
      ) : (
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      )}
    </svg>
  );
}
