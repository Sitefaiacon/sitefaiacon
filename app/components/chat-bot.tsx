"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from "lucide-react"

const initialMessages = [{ role: "bot", content: "Hello! How can I assist you today?" }]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", content: "Thank you for your message. A team member will get back to you soon." },
        ])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white"
        >
          <MessageCircle size={24} />
        </Button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 max-h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </Button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`${message.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
