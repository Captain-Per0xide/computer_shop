import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface CategoryItem {
    id: number;
    image: string;
}

interface Props {
    categories: CategoryItem[];
}

function PopularCategory({ categories }: Props) {
    return (
        <div className="w-full py-8">
            <h2 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wider">
                POPULAR CATEGORIES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((category) => (
                    <Card
                        key={category.id}
                        className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-none"
                    >
                        <div className="aspect-square flex flex-col items-center justify-center text-center">
                            <div className="flex-1 w-full relative">
                                <Image
                                    src={category.image}
                                    alt={"Popular category image"}
                                    fill
                                    className="object-cover drop-shadow-lg"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-t-3xl opacity-80"></div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

PopularCategory.displayName = "PopularCategory";

export default PopularCategory;
