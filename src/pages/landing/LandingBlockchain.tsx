"use client"

import { useTranslation } from 'react-i18next';

export default function LandingBlockchain() {
  const { t } = useTranslation();
  const recentBlocks = [
    {
      id: "26898723",
      time: "5 mins 54 secs ago",
      transactions: 8,
      shard: 0,
      hash: "a1c3ee3d78...e4422e0b6b",
    },
    {
      id: "26898437",
      time: "5 mins 54 secs ago",
      transactions: 8,
      shard: 2,
      hash: "6f6826dea2...0ae7272ae23",
    },
    {
      id: "26898722",
      time: "6 mins ago",
      transactions: 3,
      shard: 0,
      hash: "21e6b486a57...30ce76ac1",
    },
    {
      id: "26886204",
      time: "",
      transactions: 8,
      shard: "",
      hash: "638b6dae272...",
    },
  ]

  const recentTransactions = [
    {
      amount: "0.099 EGLD",
      time: "6 mins ago",
      to: "erd1s86d...eb53r8",
      shard: 1,
      from: "erd1qrqh...qzr1r3",
      shard2: 0,
      hash: "0e6183e6d27...f9af204ccd",
      status: "success",
    },
    {
      amount: "0.099 EGLD",
      time: "6 mins ago",
      to: "erd1dedj...rqvn7mqp",
      shard: 2,
      from: "erd1q8m...8qydf2f",
      shard2: 1,
      hash: "1ac5e1698d7...38eba1f0634",
      status: "warning",
    },
    {
      amount: "0.099 EGLD",
      time: "6 mins ago",
      to: "erd1vs8j...nsykdqk",
      shard: 1,
      from: "erd1q8tv...8qydf2f",
      shard2: 1,
      hash: "ea65a7e56a7...b31e8ed845d",
      status: "success",
    },
    {
      amount: "0.099 EGLD",
      time: "",
      to: "erd1c4fz...xqjqdc",
      shard: "",
      from: "erd1qd8v...8qydf",
      shard2: "",
      hash: "6452221080a...",
      status: "warning",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Recent Blocks Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">{t('slider.recentBlocks')}</h2>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <button className="text-sm text-gray-400 hover:text-white">{t('slider.viewAll')}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentBlocks.map((block, index) => (
              <div
                key={block.id}
                className={`bg-gray-900 rounded-lg p-4 border ${index === 2 ? "border-green-400" : "border-gray-700"}`}
              >
                <div className="text-lg font-mono mb-2">{block.id}</div>
                <div className="text-sm text-gray-400 mb-3">{block.time}</div>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-gray-400">{t('landing.transactions')}: </span>
                    <span className="text-white">{block.transactions}</span>
                    {block.shard !== "" && (
                      <>
                        <span className="text-gray-400"> • Shard </span>
                        <span className="text-white">{block.shard}</span>
                      </>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-400">{t('landing.hash')}: </span>
                    <span className="text-white font-mono">{block.hash}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">{t('landing.recentTransactions')}</h2>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <button className="text-sm text-gray-400 hover:text-white">{t('slider.viewAll')}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentTransactions.map((tx, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700 relative">
                <div
                  className={`absolute top-4 left-4 w-3 h-3 rounded-full ${tx.status === "success" ? "bg-green-400" : "bg-yellow-400"}`}
                ></div>
                <div className="ml-6">
                  <div className="text-lg font-mono mb-2">{tx.amount}</div>
                  <div className="text-sm text-gray-400 mb-3">{tx.time}</div>
                  <div className="space-y-1 text-sm">
                    <div>
                      <span className="text-gray-400">{t('landing.to')}: </span>
                      <span className="text-white font-mono">{tx.to}</span>
                      {tx.shard !== "" && (
                        <>
                          <span className="text-gray-400"> • Shard </span>
                          <span className="text-white">{tx.shard}</span>
                        </>
                      )}
                    </div>
                    <div>
                      <span className="text-gray-400">{t('landing.from')}: </span>
                      <span className="text-white font-mono">{tx.from}</span>
                      {tx.shard2 !== "" && (
                        <>
                          <span className="text-gray-400"> • Shard </span>
                          <span className="text-white">{tx.shard2}</span>
                        </>
                      )}
                    </div>
                    <div>
                      <span className="text-gray-400">{t('landing.hash')}: </span>
                      <span className="text-white font-mono">{tx.hash}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 mt-8">
          Made with <span className="text-red-500">❤</span> by the MultiversX team
        </div>
      </div>
    </div>
  )
}
