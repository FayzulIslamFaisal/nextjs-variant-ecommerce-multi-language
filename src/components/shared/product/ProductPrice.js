import React from 'react'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/utils/formatter'


const ProductPrice = ({
  price,
  className,
  listPrice = 0,
  isDeal = true,
  forListing = true,
  plain = false
}) => {
  const discountPercent = Math.round(100 - (price / listPrice) * 100)
  const stringValue = price.toString()
  const [intValue, floatValue] = stringValue.includes('.') 
    ? stringValue.split('.') 
    : [stringValue, '']

  return plain ? (
    formatCurrency(price)
  ) : listPrice == 0 ? (
    <div className={cn('text-3xl', className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      {floatValue && (
        <span className="text-xs align-super">.{floatValue}</span>
      )}
    </div>
  ) : isDeal ? (
    <div className="space-y-2">
      <div className="flex justify-center items-center gap-2">
        <span className="bg-red-700 rounded-sm p-1 text-white text-sm font-semibold">
          {discountPercent}% Off
        </span>
        <span className="text-red-700 text-xs font-bold">
          Limited time deal
        </span>
      </div>
      <div className={cn(`flex ${forListing && 'justify-center'} items-center gap-2`, className)}>
        <span className="text-3xl text-gray-900">
          <span className="text-xs align-super">$</span>
          {intValue}
          {floatValue && (
            <span className="text-xs align-super">.{floatValue}</span>
          )}
        </span>
        <span className="text-base text-gray-500 line-through">
          {formatCurrency(listPrice)}
        </span>
      </div>
    </div>
  ) : (
    <div className={cn(`flex ${forListing && 'justify-center'} items-center gap-2`, className)}>
      <span className="text-3xl text-gray-900">
        <span className="text-xs align-super">$</span>
        {intValue}
        {floatValue && (
          <span className="text-xs align-super">.{floatValue}</span>
        )}
      </span>
      <span className="text-base text-gray-500 line-through">
        {formatCurrency(listPrice)}
      </span>
    </div>
  )
}

export default ProductPrice