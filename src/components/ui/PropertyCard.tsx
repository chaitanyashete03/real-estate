import Image from 'next/image';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Square, BadgeCheck } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bhk: number;
  bathrooms: number;
  area: string;
  image: string;
  reraVerified: boolean;
  possession: string;
  className?: string;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  bhk,
  bathrooms,
  area,
  image,
  reraVerified,
  possession,
  className,
}: PropertyProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
            {possession}
          </div>
        </div>
        
        {reraVerified && (
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
            <BadgeCheck size={14} />
            <span>RERA Approved</span>
          </div>
        )}

        {/* Price Tag Overlay on Hover */}
        <div className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-between bg-linear-to-t from-black/80 to-black/0 p-4 pt-12 text-white transition-transform duration-300 group-hover:translate-y-0 text-lg sm:text-base md:text-lg">
          <span className="font-bold">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900 font-display">
          {title}
        </h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin size={16} className="mr-1 text-accent" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Stats */}
        <div className="my-4 grid grid-cols-3 gap-4 border-y border-gray-100 py-4 text-sm text-gray-700">
          <div className="flex flex-col items-center">
            <BedDouble size={20} className="mb-1 text-gray-400" />
            <span className="font-medium">{bhk} BHK</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-gray-100">
            <Bath size={20} className="mb-1 text-gray-400" />
            <span className="font-medium">{bathrooms} Bath</span>
          </div>
          <div className="flex flex-col items-center">
            <Square size={20} className="mb-1 text-gray-400" />
            <span className="font-medium">{area}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between">
          <div className="text-primary group-hover:invisible">
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-bold">{price}</p>
          </div>
          <Link href={`/property/${id}`}>
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
