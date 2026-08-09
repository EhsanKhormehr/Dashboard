"use client";
import ShopTitle from "@/components/common/shop-title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PenTool } from "lucide-react";
import React, { useState } from "react";

const ProductExpertReview = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="mt-5 bg-surface shadow-soft-card rounded-xl p-5">
      <div className="flex items-center">
        <PenTool className="text-primary size-[25px]" />
        <ShopTitle
          title="Expert Review"
          isShape={false}
          className="ml-2 font-black"
        />
      </div>
      <div
        className={cn(
          "overflow-hidden relative mt-5 transition-all duration-300 ease-in-out",
          expanded ? "max-h-[2000px]" : "max-h-[320px]",
        )}
      >
        <div
          className={cn(
            "absolute bottom-10 left-0 right-0 h-35 bg-gradient-to-t from-surface via-surface/90 to-transparent",
            expanded ? "hidden" : "block",
          )}
        />

        <div className="flex justify-center">
          <Button
            className="absolute -bottom-1 rounded-none -left-1 w-full cursor-pointer py-6 bg-surface hover:!bg-surface text-primary font-black hover:text-primary"
            variant={"ghost"}
            onClick={() => {
              setExpanded((prev) => !prev);
            }}
          >
            {expanded ? "View Less" : "View More"}
          </Button>
        </div>
        <div className="mb-15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error,
          minima expedita modi dolor iste quaerat unde ratione voluptatem?
          Temporibus sint a earum architecto doloremque atque maiores,
          consectetur molestias reiciendis distinctio voluptatibus, commodi eius
          aut beatae quis provident nisi numquam necessitatibus, ad hic adipisci
          iusto autem. Impedit libero ratione quasi fuga voluptates omnis magni
          amet qui voluptatum est ipsa consectetur quia ut, enim soluta porro
          molestias maiores minus nam, sunt magnam. Aspernatur, minus eum
          voluptas, voluptatem temporibus inventore soluta maxime debitis,
          quaerat alias voluptatibus totam tempore tenetur amet et sunt
          assumenda iste error distinctio. Ea laudantium commodi recusandae
          nihil asperiores sapiente quas facilis, temporibus ex quaerat incidunt
          voluptatum accusamus, tempora deserunt. Ipsum, odio quod ipsam
          architecto expedita dicta vitae, nihil perferendis repellendus
          voluptatem id. Mollitia vero totam nemo qui, explicabo amet. Tempore
          consequuntur, placeat earum quos provident recusandae quasi nesciunt
          dicta repudiandae eligendi blanditiis accusantium qui ad veniam
          beatae, iusto omnis. Enim modi illo ab at qui provident nostrum,
          assumenda ut velit harum amet cumque, tenetur error magni nesciunt
          debitis minus perspiciatis! Aspernatur exercitationem quaerat eius,
          nisi ducimus veniam iste pariatur libero quibusdam autem nemo natus
          praesentium sunt repudiandae sapiente aliquid neque, non eos.
          Inventore quaerat nisi minima explicabo? Unde molestias, neque
          eligendi error reiciendis enim velit esse ab fugit officia consectetur
          facilis nobis incidunt, voluptatum, perspiciatis eius quidem rerum
          nisi alias. Nemo, deserunt eveniet accusantium accusamus error iure
          quos unde ea omnis optio perspiciatis aspernatur officia voluptatem
          sapiente atque dolores totam dolor cupiditate eum natus esse,
          laboriosam repudiandae earum a. Natus ducimus, blanditiis quis esse
          debitis deleniti enim accusantium soluta consectetur ea corrupti,
          earum doloremque voluptas dolores sint totam, ipsam neque sapiente
          delectus ex quidem quisquam error facere assumenda! Nam quibusdam
          veritatis voluptates ad. Tempora minima, illo nostrum assumenda
          necessitatibus perferendis harum ipsa mollitia modi amet rerum ea
          omnis eos doloremque unde, architecto, quia voluptas repellat velit.
          Eum vitae natus ipsam voluptatibus nisi aperiam consequatur enim ut
          saepe, unde veniam explicabo deleniti impedit ducimus iusto assumenda
          minus nesciunt exercitationem reiciendis ab fugiat quae nulla
          praesentium debitis! Numquam obcaecati corrupti optio earum, minima
          temporibus cum. Quaerat dolore unde molestiae quasi ipsa dolorem ab
          iure, asperiores incidunt facere cum perspiciatis quibusdam quidem
          possimus, eum est ipsam quas exercitationem natus architecto fugit
          accusamus. Libero, doloremque perferendis mollitia at ea minima cum
          ex! Aliquam esse debitis corrupti inventore eius obcaecati nihil,
          mollitia laboriosam possimus in impedit id temporibus sint
          exercitationem a nisi accusantium enim voluptatem. Illum, fugiat
          explicabo error voluptate perferendis nihil quisquam praesentium,
          accusamus nemo, quas eius dolorem neque distinctio est culpa possimus?
          Quo qui, ea iure accusantium, nobis corporis consequatur maxime at
          veritatis minus voluptate facere sequi, tempore vitae! Similique
          explicabo nisi nesciunt beatae. Est, dolor minima? Excepturi quidem
          natus eligendi laudantium assumenda amet ipsam neque non in, eaque
          deserunt fugit beatae, unde mollitia vero esse. Alias in tempore,
          laboriosam soluta laudantium harum assumenda quisquam vitae deleniti
          at itaque ratione ullam omnis accusamus ab odio modi eveniet repellat
          voluptate molestias est, nulla error. Aperiam a delectus provident
          suscipit, hic similique corrupti quibusdam sed voluptates quia
          distinctio. Eaque magni adipisci odio minima commodi suscipit deleniti
          ab expedita natus velit obcaecati aspernatur sit eius voluptas
          voluptate, dolores fuga id, harum ea voluptatum omnis molestiae
          corporis. Aspernatur facilis ea quasi, quam incidunt maiores nam ipsum
          fugiat? Adipisci minus dolorum blanditiis voluptatem excepturi natus
          id, dolor, aliquam fugit accusamus officiis ad similique, modi fugiat
          illo neque ducimus ipsam. Soluta, molestiae omnis illo necessitatibus
          at repellat iure sed? Soluta, optio obcaecati omnis nesciunt modi
          maiores labore corporis repudiandae tempora saepe veniam nam. Quod,
          aperiam ad? Vero placeat dolores similique harum doloribus enim rerum
          molestiae distinctio provident repudiandae. Sapiente assumenda
          reprehenderit corrupti ut. Magni, voluptatum. Eveniet, eaque animi.
          Qui itaque, assumenda perspiciatis distinctio, ut ullam officiis
          officia veniam fuga dolorem quasi earum? Dolorem, enim ab. Quasi
          debitis, eligendi architecto quia minima distinctio! Magnam illo,
          eligendi autem aspernatur architecto perferendis neque, deleniti
          laudantium enim, hic numquam vel tempore porro temporibus veniam
          debitis. Impedit nemo omnis mollitia dolore sint cum, assumenda
          corporis, veritatis cumque maiores eligendi quis saepe possimus!
          Voluptates aperiam cum illum nihil nobis accusantium recusandae,
          reiciendis iste amet velit. Similique unde minima voluptate enim ex
          dolore amet, omnis laudantium eius porro ut harum laboriosam maiores
          quod voluptatem expedita saepe doloremque impedit nemo! Ipsa illum
          deleniti harum commodi? Quae deserunt dignissimos consectetur aperiam
          ea asperiores dolor neque, tenetur obcaecati sequi illo unde mollitia
          quasi rem cum impedit. Doloremque fuga minus atque error quisquam ad
          neque! Eius a voluptates quibusdam sit animi nisi non commodi
          voluptate aliquam dicta magni eum adipisci aut consequatur corrupti
          placeat perferendis maiores ex distinctio, veritatis ea eos! Est
          repellendus quis sequi nesciunt, quam, magnam nostrum in pariatur
          sapiente voluptate incidunt. Obcaecati facilis quae beatae aspernatur
          id temporibus saepe tempore voluptatem impedit quia labore suscipit
          laudantium fugit sapiente hic magnam maiores aut quam, architecto
          recusandae? Consectetur veniam sed officiis consequuntur culpa. Nihil
          ut autem nobis earum, delectus dignissimos repellendus quis,
          voluptatibus hic minus obcaecati. Reiciendis excepturi dolor dolores
          modi incidunt quas harum nihil alias, et nobis ipsum voluptas neque
          eius voluptate quisquam architecto veritatis deleniti beatae magni?
          Porro quasi id in cupiditate, nam esse molestias sint minus quibusdam,
          hic commodi, magni voluptatem rem dignissimos? Nemo sed dolorem
          molestias quidem blanditiis ea fugit placeat! Voluptates ipsa vel at
          inventore rem. Asperiores cum cumque nam eaque ratione tempore
          voluptates sed iusto laborum quas! Cupiditate ea ex sunt ab fuga quae
          est ipsam laudantium corrupti totam esse, nesciunt, temporibus
          necessitatibus labore recusandae? Quis expedita nulla esse, illum
          saepe nobis quos consequuntur beatae distinctio dolore ut, aspernatur
          voluptas incidunt vel laudantium labore, molestiae exercitationem
          laborum ad dolorem delectus minus rem quae! Veritatis corporis culpa,
          aperiam perferendis obcaecati hic deserunt minus nisi officia tenetur
          soluta repellat molestias eius sit, error dolor, doloribus beatae? Quo
          sint laborum rerum nemo delectus voluptatem unde quidem doloribus vel
          exercitationem quae saepe iste libero voluptatibus aperiam, doloremque
          perspiciatis, in ipsam corrupti, quia nostrum? Aliquid, tenetur. Hic
          dolor obcaecati, beatae dolorem voluptas eligendi, quam eaque
          voluptate amet porro nobis saepe inventore ut! Quos a maxime eaque.11
        </div>
      </div>
    </div>
  );
};

export default ProductExpertReview;
