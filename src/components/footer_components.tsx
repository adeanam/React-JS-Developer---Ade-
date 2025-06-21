export const FooterComponents = () => {
  return (
      <footer className={`fixed bottom-0 left-0 right-0 p-6 transition-all duration-700 opacity-100`}>
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Made by{' '}
            <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 cursor-default">
              React JS Developer [Ade]
            </span>
          </p>
          <p className="text-gray-400 text-xs mt-1">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
  );
}

export default FooterComponents;