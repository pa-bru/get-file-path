module.exports = function getFilePath(
  currentPath = "./",
  file = "package.json"
) {
  const filePath = path.resolve(currentPath, file)
  const hasFile = fs.existsSync(filePath)

  if (currentPath === "/") {
    return null
  }

  if (!hasFile) {
    return getFilePath(path.resolve(currentPath, ".."))
  }

  return filePath
}
