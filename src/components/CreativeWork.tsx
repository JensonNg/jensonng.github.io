import { Play, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const reels = [
  {
    title: "Sustainable Living: 5 Daily Swaps",
    platform: "Instagram Reels",
    views: "45K views",
    description: "A quick-hit video on simple sustainability swaps for everyday life.",
    thumbnail: null,
  },
  {
    title: "Behind the Brand: Green Packaging",
    platform: "Instagram Reels",
    views: "32K views",
    description: "Deep dive into eco-packaging solutions for consumer brands.",
    thumbnail: null,
  },
  {
    title: "Marketing That Actually Helps the Planet",
    platform: "Instagram Reels",
    views: "28K views",
    description: "Exploring how brands can align profit with purpose.",
    thumbnail: null,
  },
];

const linkedinPosts = [
  {
    title: "Why Most 'Green' Campaigns Fail",
    engagement: "2.4K impressions",
    description:
      "A breakdown of common greenwashing mistakes and how to build genuine sustainability messaging.",
    tags: ["Sustainability Marketing", "Brand Trust"],
  },
  {
    title: "The Content Calendar That Grew My Client's Audience by 140%",
    engagement: "3.1K impressions",
    description:
      "Sharing the exact framework I use to plan high-performing content for sustainable brands.",
    tags: ["Content Strategy", "Growth"],
  },
  {
    title: "From Data to Story: How I Write Compelling Marketing Copy",
    engagement: "1.8K impressions",
    description:
      "My process for turning analytics insights into engaging narratives that convert.",
    tags: ["Copywriting", "Analytics"],
  },
];

export function CreativeWork() {
  return (
    <div className="space-y-8">
      {/* Reels */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Play className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Instagram Reels</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.title}
              className="rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors group"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[9/16] bg-muted flex items-center justify-center relative max-h-48">
                <Play className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <Badge className="absolute top-2 right-2 text-xs">{reel.views}</Badge>
              </div>
              <div className="p-3">
                <p className="text-xs text-muted-foreground mb-1">{reel.platform}</p>
                <h4 className="text-sm font-medium leading-tight">{reel.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{reel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn Posts */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ExternalLink className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">LinkedIn Posts</h3>
        </div>
        <div className="space-y-3">
          {linkedinPosts.map((post) => (
            <div
              key={post.title}
              className="rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h4 className="text-sm font-medium mb-1">{post.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Badge variant="outline" className="text-xs shrink-0">{post.engagement}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
