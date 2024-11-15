import { CustomSelect } from '@/components/custom-select';
import RecipesByTagUi from '@/components/recipes-by-tags-ui';
import SectionTitle from '@/components/section-title';
import SkeletonRecipes from '@/components/skeleton-recipes';
import { SearchParamsType } from '@/data/_model/searchparams.type';
import { itemsPerPage } from '@/data/_static/items.per.page';
import recipeFilters from '@/data/_static/recipe.filters';
import React, { Suspense } from 'react'
type Params = Promise<{ id: string }>
const RecipesByTag = async (props: {
    searchParams: SearchParamsType,
    params: Params
}) => {
    const params = await props?.params;
    const searchParams = await props?.searchParams;
    const selectedOption = recipeFilters.filter(option => option?.id === searchParams?.sortBy)[0];
    return (
        <section className='pt-8  '>
            <div className="container">
                <div className=' mb-8 flex gap-4 sm:flex-row flex-col justify-between sm:items-center'>
                    <SectionTitle title={decodeURIComponent(params?.id)} />
                    <div className=' sm:min-w-60'>
                        <CustomSelect
                            defaultValue={selectedOption?.id}
                            placeholder='Sort By'
                            options={recipeFilters} />
                    </div>
                </div>

                <Suspense key={JSON.stringify(searchParams)} fallback={<SkeletonRecipes numberOfCards={itemsPerPage} />}>
                    <RecipesByTagUi tag={params?.id} searchParams={searchParams} />
                </Suspense>


            </div>
        </section>
    )
}



export default RecipesByTag;

