import { Play } from "lucide-react";
import { clients, clientsMessage } from "../constants";
import doubleQuoteMark from "../assets/images/double-quote-mark.svg";

const PartnerCard = () => {
  return (
    <div className="mt-20 flex flex-row gap-10 overflow-x-scroll no-scrollbar">
      {clients.map((client) => (
        <div
          key={client.id}
          className="bg-(--card-bg) border border-(--text-color) hover:border-none w-[500px] h-[600px] rounded-4xl flex flex-col items-center justify-center text-center gap-20 shrink-0 hover:scale-[0.95] duration-300 transition-transform"
        >
          <div className="">
            <img
              src={client.image}
              alt={client.name}
              className="size-32 rounded-full"
            />
          </div>

          <div className="syne-normal">
            <h1 className="text-2xl">{client.name}</h1>
            <p>{client.position}</p>
          </div>

          <div className="">
            <a
              href={client.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 rounded-4xl px-8 py-4 flex items-center gap-2"
            >
              Watch Video
              <Play size={20} fill="white" />
            </a>
          </div>
        </div>
      ))}

      {clientsMessage.map((cltmsg) => (
        <div
          key={cltmsg.id}
          className="bg-(--card-bg) border border-(--text-color) hover:border-none w-[500px] h-[600px] rounded-4xl px-10 flex flex-col items-center justify-center text-center gap-20 shrink-0 hover:scale-[0.95] duration-300 transition-transform"
        >
          <div className="">
            <div className="flex justify-center">
              <img
                src={doubleQuoteMark}
                alt="double-quote-mark"
                className="invert dark:invert-0 size-16"
              />
            </div>
            <div className="syne-normal text-xl">
              <p className="">{cltmsg.message}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 syne-normal">
            <img
              src={cltmsg.image}
              alt={cltmsg.name}
              className="size-32 rounded-full"
            />
            <h1>{cltmsg.name}</h1>
            <p>{cltmsg.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerCard;
