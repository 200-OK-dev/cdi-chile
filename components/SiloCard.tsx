import React from 'react';

interface SiloCardProps {
  messageId: string;
  messageNumber: number;
  title: string;
  subtitle: string;
  description: string;
  sender: string;
}

const SiloCard: React.FC<SiloCardProps> = ({
  messageId = "SHF-ID#-APL 9733",
  messageNumber = 18754,
  title = "REPRODUCTIVE CLEARANCE GRANT",
  subtitle = "CONGRATULATIONS. YOU HAVE BEEN APPROVED FOR",
  description = "CHILDBEARING STATUS FOR YEAR.\nPLEASE SEE YOUR DOCTOR",
  sender = "MOD8 / SILO ADMIN",
}) => {
  return (
    <div className="w-full max-w-lg mx-auto border border-gray-800 rounded-lg overflow-hidden bg-green-500/20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="font-bold text-xl">1 NEW MESSAGE</div>
        <button className="border-2 border-black px-8 py-1 font-bold">CLOSE</button>
        <div className="font-bold text-xl">SILO MAIL</div>
      </div>

      {/* Message Label */}
      <div className="flex items-center justify-center my-4">
        <div className="w-1/3 h-px bg-gray-400"></div>
        <div className="px-4 font-bold text-lg">MESSAGE</div>
        <div className="w-1/3 h-px bg-gray-400"></div>
      </div>

      {/* Message ID */}
      <div className="px-4 mb-4 font-bold">{messageId}</div>

      {/* Message Content */}
      <div className="mx-4 mb-4 bg-gray-900 text-amber-400 p-4 rounded">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold text-white">{title}</div>
          <button className="bg-amber-300 text-black px-6 py-2 rounded font-bold">VIEW</button>
        </div>
        <div className="text-xl">
          {subtitle}
          <br />
          {description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="font-bold">{sender}</div>
        <div className="font-bold">MSG# {messageNumber}</div>
      </div>
    </div>
  );
};

export default SiloCard;