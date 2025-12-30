import React, { useEffect } from 'react';

const MaiAgentChat = () => {
  useEffect(() => {
    // 檢查是否已存在，避免重複載入
    if (window.maiagentChatbotConfig) return;

    // 設定配置
    window.maiagentChatbotConfig = {
      webChatId: import.meta.env.VITE_WEB_CHAT_ID,
      baseUrl: 'https://chat.maiagent.ai/web-chats',
      primaryColor: 'rgb(208, 29, 38)',
      allowDrag: true,
      showChatNotification: true,
    };

    // 載入腳本
    const script = document.createElement('script');
    script.src = "https://chat.maiagent.ai/js/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // 可以在這裡做清理，但通常聊天機器人是全域的，不需要移除
    };
  }, []);

  return null;
};

export default MaiAgentChat;
