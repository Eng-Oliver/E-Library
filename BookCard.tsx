import { Star, Heart, Download, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  coverUrl: string;
  isNew?: boolean;
  onClick?: () => void;
}

export function BookCard({
  title,
  author,
  category,
  rating,
  coverUrl,
  isNew = false,
  onClick,
}: BookCardProps) {
  return (
    <div
      className="group cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md mb-3 bg-gray-100">
        <ImageWithFallback
          src={coverUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <Badge
            className="absolute top-2 right-2 bg-[var(--accent-orange)] text-white border-none"
          >
            جديد
          </Badge>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button className="bg-white rounded-full p-2 hover:bg-gray-100">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-gray-100">
              <Download className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-right">
        <h3 className="mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mb-2">{author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
