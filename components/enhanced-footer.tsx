interface EnhancedFooterProps {
  language: "en" | "ar"
}

export default function EnhancedFooter({ language }: EnhancedFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">{language === "en" ? "With Love & Gratitude" : "بكل حب وامتنان"}</div>
        <div className="footer-info">
          {language === "en" ? "We can't wait to celebrate with you!" : "لا يسعنا الانتظار للاحتفال معكم!"}
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()}
          {language === "en" ? " Made with Love" : " صُنع بكل حب"}
        </div>
      </div>
    </footer>
  )
}
