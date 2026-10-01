export default function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse flex flex-col h-full">
      <div className="aspect-[4/3] bg-gray-200" />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-3">
            <div className="h-3.5 bg-gray-200 rounded w-24" />
            <div className="h-3.5 bg-gray-200 rounded w-16" />
          </div>
          <div className="h-5 bg-gray-200 rounded w-full mb-2" />
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
          <div className="h-3.5 bg-gray-200 rounded w-36 mb-4" />
          <div className="h-6 bg-gray-200 rounded w-28 mb-3" />
        </div>
        <div>
          <div className="flex gap-4 py-3 border-t border-gray-100">
            <div className="h-3 bg-gray-200 rounded w-12" />
            <div className="h-3 bg-gray-200 rounded w-12" />
            <div className="h-3 bg-gray-200 rounded w-16 ml-auto" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
            <div className="h-3 bg-gray-200 rounded w-20" />
            <div className="h-3 bg-gray-200 rounded w-16" />
          </div>
        </div>
      </div>
    </div>
  )
}
