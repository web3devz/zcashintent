"use client";

import { useState } from "react";
import { AccountWidget } from "@defuse-protocol/defuse-sdk";

import Paper from "@src/components/Paper";
import { LIST_TOKENS } from "@src/constants/tokens";
import { useConnectWallet } from "@src/hooks/useConnectWallet";
import { useTokenList } from "@src/hooks/useTokenList";
import { renderAppLink } from "@src/utils/renderAppLink";

export default function AccountPage() {
  const { state } = useConnectWallet();
  const tokenList = useTokenList(LIST_TOKENS);

  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    // Add your custom alert logic here, e.g., call an API to register the alert
    console.log("Custom alert set for:", { email, whatsapp });
  };

  return (
    <Paper>
      <AccountWidget
        tokenList={tokenList}
        userAddress={(state.isVerified ? state.address : undefined) ?? null}
        userChainType={state.chainType ?? null}
        renderHostAppLink={renderAppLink}
      />
      <div className="mt-6 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Custom Transaction Alert
        </h2>
        <form onSubmit={handleAlertSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium mb-1"
            >
              WhatsApp Number
            </label>
            <input
              id="whatsapp"
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter your WhatsApp number"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          >
            Set Alert
          </button>
        </form>
      </div>
    </Paper>
  );
}
