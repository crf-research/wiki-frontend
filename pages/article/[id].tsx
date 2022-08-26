import type { NextPage } from 'next'

const Article: NextPage = () => {
  return (
    <div className="text-center max-h-full">
      <div>
        <h1 className="font-semibold text-4xl mb-2">Article Title</h1>
        <h3 className="text-md text-slate-300 mb-8 cursor-pointer hover:underline hover:underline-offset-4">
          [version history]
        </h3>
        <div className="flex justify-center">
          <div className="w-1/2 text-justify">
            <p className="indent-8 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              magna eget est lorem ipsum dolor. Amet aliquam id diam maecenas
              ultricies mi eget mauris pharetra.
            </p>
            <p className="indent-8 mb-6">
              Lectus urna duis convallis convallis tellus id interdum velit
              laoreet. Dictum sit amet justo donec. Magna ac placerat vestibulum
              lectus mauris ultrices eros in cursus. Laoreet non curabitur
              gravida arcu ac tortor dignissim. Nec tincidunt praesent semper
              feugiat nibh sed pulvinar proin gravida. Imperdiet nulla malesuada
              pellentesque elit eget gravida cum sociis. Netus et malesuada
              fames ac turpis. Nibh cras pulvinar mattis nunc sed blandit libero
              volutpat. Est ultricies integer quis auctor elit sed vulputate mi
              sit. Est velit egestas dui id. Arcu risus quis varius quam quisque
              id diam vel quam. Elementum pulvinar etiam non quam lacus
              suspendisse faucibus. Eu nisl nunc mi ipsum faucibus vitae.
              Molestie at elementum eu facilisis sed. Sapien et ligula
              ullamcorper malesuada proin libero nunc consequat interdum. Nam
              aliquam sem et tortor consequat id porta nibh.
            </p>
            <p className="indent-8 mb-6">
              Ut consequat semper viverra nam libero justo laoreet sit amet. Ac
              feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper. Gravida cum sociis natoque penatibus et magnis dis
              parturient. Fusce ut placerat orci nulla pellentesque dignissim.
              Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.
              Etiam erat velit scelerisque in dictum. Dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus in. Consequat semper
              viverra nam libero justo laoreet. Lacus suspendisse faucibus
              interdum posuere lorem ipsum dolor. Dolor sed viverra ipsum nunc.
              Gravida rutrum quisque non tellus orci ac auctor augue mauris.
            </p>
          </div>
        </div>
        <div className="mt-8 space-x-8 pb-10">
          <span className="text-md text-slate-300 cursor-pointer hover:underline hover:underline-offset-4">
            [edit]
          </span>
          <span className="text-md text-slate-300 cursor-pointer hover:underline hover:underline-offset-4">
            [delete]
          </span>
        </div>
      </div>
    </div>
  )
}

export default Article
